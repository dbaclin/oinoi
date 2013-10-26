from django.conf.urls.defaults import *
from django.conf import settings


# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('oinoi.views',
	 url(r'^analyze/$', 'analyze'),	 
	 url(r'^$', 'home'),
	
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
     # url(r'^admin/', include(admin.site.urls)),
) 


urlpatterns += patterns('slickgrid.views',
    ( r'^resources/(?P<path>.*)$',
      'django.views.static.serve',
      { 'document_root': settings.MEDIA_ROOT } ),
    url( r'^slickgrid/', 'index', name="index" ) ,
)


urlpatterns += patterns('spreadsheet.views',
    ( r'^upload/(?P<path>.*)$',
      'django.views.static.serve',
      { 'document_root': settings.MEDIA_ROOT } ),
    url( r'^spreadsheet/', 'spreadsheet') ,
)