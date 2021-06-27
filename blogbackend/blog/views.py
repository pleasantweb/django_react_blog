from rest_framework.filters import SearchFilter
from .models import Blog
from .serializers  import BlogSerializer
from rest_framework import viewsets
# Create your views here.

class BlogModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    filter_backends = [SearchFilter]
    search_fields = ['slug','headblog']


