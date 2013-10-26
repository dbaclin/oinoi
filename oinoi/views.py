from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import render_to_response
from oinoi import forms 
from oinoi import models


def home(request):
    t = get_template('index.html')
    html = t.render(Context())
    return HttpResponse(html)


def analyze(request):
    t = get_template('analyze.html')
    html = t.render(Context())
    return HttpResponse(html)


def upload_form(request):
    return render(request, 'search_form.html')


def upload(request):
	if request.method == 'POST':
		form = forms.PastedDataForm(request.POST)
		if form.is_valid():
			cd = form.cleaned_data
			return HttpResponseRedirect('/analyze/')
	else:
		form = forms.PastedDataForm()
	return render(request, 'contact_form.html', {'form': form})





 	
