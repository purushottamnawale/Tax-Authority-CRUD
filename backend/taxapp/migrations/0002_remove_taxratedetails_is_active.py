# Generated by Django 4.1 on 2023-07-01 13:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('taxapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='taxratedetails',
            name='is_active',
        ),
    ]