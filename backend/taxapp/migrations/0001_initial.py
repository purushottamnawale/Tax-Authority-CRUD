# Generated by Django 4.1 on 2023-06-30 05:38

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Tax',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('taxtype', models.CharField(max_length=10)),
                ('zone', models.CharField(blank=True, max_length=255, null=True)),
                ('ward', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.CharField(blank=True, max_length=255, null=True)),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='taxapp.country')),
            ],
        ),
        migrations.CreateModel(
            name='TaxRate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tax_rate_name', models.CharField(max_length=30, verbose_name='Tax Rate Name')),
                ('tax_type_ref_id', models.CharField(choices=[('Income Tax', 'Income Tax'), ('GST', 'GST')], max_length=50, verbose_name='Tax Type Ref ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='TaxRate Is Active')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='TaxRate Is Deleted')),
                ('created_date_time', models.DateTimeField(auto_now_add=True, verbose_name='TaxRate Created Date Time')),
                ('updated_date_time', models.DateTimeField(default=django.utils.timezone.localtime, verbose_name='TaxRate Updated Date Time')),
                ('tax_authority_ref_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='taxapp.tax', verbose_name='Tax Authority Ref ID')),
            ],
        ),
        migrations.CreateModel(
            name='TaxRateDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hsn_sac_no', models.CharField(default=0, max_length=30, verbose_name='HSN or SAC No')),
                ('description', models.CharField(blank=True, max_length=30, verbose_name='Description')),
                ('from_date', models.DateField(verbose_name='TaxRateDetails From Date')),
                ('to_date', models.DateField(verbose_name='TaxRateDetails To Date')),
                ('tax_rate', models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Tax Rate')),
                ('rcm_flag', models.BooleanField(default=False, verbose_name='RCM Flag')),
                ('cess', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, verbose_name='CESS')),
                ('is_active', models.BooleanField(default=True, verbose_name='TaxRateDetails Is Active')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='TaxRateDetails Is Deleted')),
                ('created_date_time', models.DateTimeField(auto_now_add=True, verbose_name='TaxRateDetails Created Date Time')),
                ('updated_date_time', models.DateTimeField(default=django.utils.timezone.localtime, verbose_name='TaxRateDetails Updated Date Time')),
                ('header_ref_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='initialItemRow', to='taxapp.taxrate', verbose_name='TaxRateDetails Header Ref ID')),
            ],
        ),
    ]
