from django.forms import widgets
from rest_framework import serializers
from .models import *
<<<<<<< HEAD
from django.contrib.auth.models import User
from django.http import request



from AnswerSerializer(serializers.ModelSerializer):
	"""
	serializer class for Question/answer model

	"""

	answer = serializers.CharField()
	

	class Meta:
		model = Question
		fields = ("Answer")


	def retrieve(self, validated_data):
		"""
		create and return a new answer instance
		"""
		return Question.objects.create(**validated_data)
