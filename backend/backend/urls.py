from django.contrib import admin
from django.urls import path, include
from api.views import TodoListCreateAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', TodoListCreateAPIView.as_view(), name='todo-list-create'),
]
