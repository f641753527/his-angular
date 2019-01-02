
export const routerConfig = [
  { index: 1, name: '登记挂号', path: 'registration', weight: 1,
    children: [ 
      { name: '登记挂号', path: 'add'},
      { name: '登记列表', path: 'list'},
    ] 
  },
  { index: 2, name: '医生站', path: 'doctor', weight: 1 * 2 * 2, 
    children: [
      { name: '接诊记录', path: 'history'},
      { name: '今日接诊', path: 'today'},
    ]
  },
  { index: 3, name: '收费发药', path: 'charge', weight: (1 * 2 * 2 * 2) + (1 * 2) + (1 * 2 * 2 * 2 * 2),
    children: [
      { name: '待收费', path: 'list'},
      { name: '收费记录', path: 'history'},
      { name: '门诊购药', path: 'drug_sell'},
    ]
  },
  { index: 4, name: '药品库房', path: 'drug', weight: 1 * 2 * 2 * 2 * 2 * 2,
    children: [
      { name: '药品信息维护', path: 'drug_info'},
      { name: '供应商维护', path: 'suppliers'},
      { name: '采购入库', path: 'drug_check_in'},
      { name: '库存盘点', path: 'store_check'},
      { name: '库存盘点', path: 'store_query'},
    ]
  },
  { index: 5, name: '模板管理', path: 'template', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2,
    children: [
      { name: '病历模板', path: 'record'},
      { name: '西/成药处方模板', path: 'west'},
      { name: '中药处方模板', path: 'chinese'},
      { name: '输液处方模板', path: 'water'},
      { name: '诊疗项目模板', path: 'items'},
      { name: '耗材组合模板', path: 'meterail'},
      { name: '其他项目模板', path: 'others'},
    ]
  },
  { index: 6, name: '客户管理', path: 'customers', weight: (1 * 2 * 2 * 2 * 2 * 2 * 2 * 2) + (1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2), 
    children: [
      { name: '客户档案', path: 'customerslist'},
      { name: '新建随访', path: 'addfollowup'},
    ]
  },
  { index: 7, name: '统计查询', path: 'statistics', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2,
    children: [
      { name: '接诊日志', path: 'list'},
    ]
  },
  { index: 8, name: '诊所管理', path: 'settings', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2,
    children: [
      { name: '注册信息', path: 'clinicinfo'},
    ]
  },
];