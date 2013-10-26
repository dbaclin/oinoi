from django import forms

class PastedDataForm(forms.Form):
    pastedData = forms.CharField(widget=forms.Textarea)

class UploadFileForm(forms.Form):
    title = forms.CharField(max_length=50)
    file  = forms.FileField()