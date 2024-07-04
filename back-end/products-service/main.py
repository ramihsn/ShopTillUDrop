from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List

from models import Product, ProductDB
from database import engine, Base, get_db
import crud

app = FastAPI()
Base.metadata.create_all(bind=engine)


@app.get("/products", response_model=List[Product])
async def get_products(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)) -> list[ProductDB]:
    products = crud.get_products(db, skip=skip, limit=limit)
    return products


@app.post("/products", response_model=Product)
async def create_product(product: Product, db: Session = Depends(get_db)) -> ProductDB:
    return crud.create_product(db=db, product=product)


@app.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: int, db: Session = Depends(get_db)) -> ProductDB:
    db_product = crud.get_product(db, product_id=product_id)
    if db_product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return db_product


@app.put("/products/{product_id}", response_model=Product)
async def update_product(product_id: int, updated_product: Product, db: Session = Depends(get_db)) -> ProductDB:
    db_product = crud.update_product(db, product_id=product_id, updated_product=updated_product)
    if db_product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return db_product


@app.delete("/products/{product_id}", response_model=Product)
async def delete_product(product_id: int, db: Session = Depends(get_db)) -> ProductDB:
    db_product = crud.delete_product(db, product_id=product_id)
    if db_product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return db_product
