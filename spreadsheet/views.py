from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import render_to_response


def spreadsheet(request):
    t = get_template('spreadsheet_base.html')
    html = t.render(Context())
    return HttpResponse(html)
