# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sherlocked', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='WaitMessage',
            field=models.TextField(default=b'WAIT!!', max_length=100000),
        ),
        migrations.AlterField(
            model_name='question',
            name='WaitTime',
            field=models.CharField(default=0.01, max_length=100),
        ),
        migrations.AlterField(
            model_name='question',
            name='question_story',
            field=models.TextField(max_length=10000, null=True),
        ),
    ]
