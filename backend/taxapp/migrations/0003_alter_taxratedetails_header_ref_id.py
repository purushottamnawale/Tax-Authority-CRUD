# Generated by Django 4.1 on 2023-07-05 13:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('taxapp', '0002_remove_taxratedetails_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='taxratedetails',
            name='header_ref_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tax_rate_details', to='taxapp.taxrate', verbose_name='TaxRateDetails Header Ref ID'),
        ),
    ]
