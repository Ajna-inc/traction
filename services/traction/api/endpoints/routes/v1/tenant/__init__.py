from fastapi import APIRouter

from .contacts import contacts_router
from .governance import governance_router
from .issuer import issuer_router
from .admin import admin_router

v1_tenant_router = APIRouter()
v1_tenant_router.include_router(contacts_router, prefix="/contacts", tags=["contacts"])
v1_tenant_router.include_router(issuer_router, prefix="/issuer", tags=["issuer"])
v1_tenant_router.include_router(
    governance_router, prefix="/governance", tags=["governance"]
)
v1_tenant_router.include_router(admin_router, prefix="/admin", tags=["admin"])
