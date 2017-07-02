import { Component, OnInit } from '@angular/core';

import { User } from '../../domain';
import { getProvinces, getCitiesByProvince, getAreasByCity } from '../../utils/area';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user: User = {
    email: '',
    password: '',
    repeat: '',
    address: {
      province: '',
      city: '',
      area: '',
      street: ''
    }
  };

  provinces = getProvinces();
  cities = [];
  areas = [];

  constructor() { }

  ngOnInit() {}

  onProvinceChange() {
    this.cities = getCitiesByProvince(this.user.address.province);
  }

  onCityChange() {
    this.areas = getAreasByCity(this.user.address.province, this.user.address.city);
  }

  onSubmit({value, valid}, event: Event) {
    if (valid) {
      console.log(value);
    }
    event.preventDefault();
    //阻止事件冒泡,防止默认的表单提交事件引起浏览器的刷新。
  }
}
