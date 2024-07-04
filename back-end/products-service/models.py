from sqlalchemy import Column, Integer, String, Float, Boolean
from pydantic import BaseModel, ConfigDict
from typing import Optional
from database import Base


class ProductDB(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
    price = Column(Float)
    imageUrl = Column(String)
    in_stock = Column(Boolean, default=True)


class Product(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = None
    name: str
    description: Optional[str] = None
    price: float
    imageUrl: str
    in_stock: bool
