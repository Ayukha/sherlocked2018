from django.contrib import admin
from sherlocked.models import *


class UserDetailAdmin(admin.ModelAdmin):
    list_display = ('Zealid', 'CurrentQuestionNo', 'LastSolvedAt', 'college', 'phno',)
    search_list = ('Zealid', 'CurrentQuestionNo', 'LastSolvedAt', 'college', 'phno',)
    list_filter = ('Zealid', 'CurrentQuestionNo', 'LastSolvedAt', 'college', 'phno',)

admin.site.register(Question)
admin.site.register(UserDetail, UserDetailAdmin)
