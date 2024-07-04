import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database import Base, get_db
from main import app
import crud  # noqa
from models import ProductDB  # noqa

# Create a test database URL
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# Create a test database engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Override the get_db dependency to use the test database
def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db

# Create the test database
Base.metadata.create_all(bind=engine)

client = TestClient(app)


@pytest.fixture(scope="function")
def db_session():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


def test_create_product(db_session):
    response = client.post("/products", json={"name": "Test Product", "price": 10.0, "in_stock": True})
    assert response.status_code == 200
    assert response.json()["name"] == "Test Product"


def test_get_products(db_session):
    response = client.get("/products")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_get_product(db_session):
    # Create a product first
    client.post("/products", json={"name": "Test Product", "price": 10.0, "in_stock": True})
    response = client.get("/products/1")
    assert response.status_code == 200
    assert response.json()["name"] == "Test Product"


def test_update_product(db_session):
    client.post("/products", json={"name": "Test Product", "price": 10.0, "in_stock": True})
    response = client.put("/products/1", json={"name": "Updated Product", "price": 12.0, "in_stock": False})
    assert response.status_code == 200
    assert response.json()["name"] == "Updated Product"


def test_delete_product(db_session):
    client.post("/products", json={"name": "Test Product", "price": 10.0, "in_stock": True})
    response = client.delete("/products/1")
    assert response.status_code == 200
    assert response.json()["name"] == "Test Product"
