from sqlalchemy.orm import Session
from models import ProductDB, Product


def get_products(db: Session, skip: int = 0, limit: int = 10):
    return db.query(ProductDB).offset(skip).limit(limit).all()


def create_product(db: Session, product: Product):
    db_product = ProductDB(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


def get_product(db: Session, product_id: int):
    return db.query(ProductDB).filter(ProductDB.id == product_id).first()


def update_product(db: Session, product_id: int, updated_product: Product):
    db_product = db.query(ProductDB).filter(ProductDB.id == product_id).first()
    if db_product:
        updated_data = updated_product.model_dump()
        updated_data.pop('id', None)  # Exclude 'id' from being updated
        for key, value in updated_data.items():
            setattr(db_product, key, value)
        db.commit()
        db.refresh(db_product)
        return db_product
    return None


def delete_product(db: Session, product_id: int):
    db_product = db.query(ProductDB).filter(ProductDB.id == product_id).first()
    if db_product:
        db.delete(db_product)
        db.commit()
        return db_product
    return None
