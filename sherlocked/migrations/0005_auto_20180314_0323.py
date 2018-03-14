# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sherlocked', '0004_question_question_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question_image',
            field=models.ImageField(null=True, upload_to=b'images/', blank=True),
        ),
    ]
