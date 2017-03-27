# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sherlocked', '0003_auto_20170321_1637'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='question_image',
            field=models.ImageField(null=True, upload_to=b'static/images/', blank=True),
            preserve_default=True,
        ),
    ]
