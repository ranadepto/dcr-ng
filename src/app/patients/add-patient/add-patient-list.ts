import {CancerRelatedPredefinedDataService} from "../../services/cancer-related-predefined-data.service";

export class AddPatientList {

  constructor(protected cancerRelatedPredefinedDataService: CancerRelatedPredefinedDataService)
  {

  }

  getGenderList() {
    return [{label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'}];
  }
  
  getReligionList()
  {
    return [{ label: 'Islam', value: 'Islam' },
    { label: 'Hindu', value: 'Hindu' },
    { label: 'Buddha', value: 'Buddha' },
    { label: 'Christian', value: 'Christian' },
    { label: 'Other', value: 'Other' }];
  }
  
  getBloodGroupList()
  {
    return [{ label: 'A+(ve)', value: 'A+(ve)' },
    { label: 'A-(ve)', value: 'A-(ve)' },
    { label: 'B+(ve)', value: 'B+(ve)' },
    { label: 'B-(ve)', value: 'B-(ve)' },
    { label: 'O+(ve)', value: 'O+(ve)' },
    { label: 'O-(ve)', value: 'O-(ve)' },
    { label: 'AB+(ve)', value: 'AB+(ve)' },
    { label: 'AB-(ve)', value: 'AB-(ve)' }];
  }
  
  getMoreRecommendedOptionList()
  {
    return [
      { label: 'CHEMOTHERAPY', value: 'CHEMOTHERAPY', checked: true },
      { label: 'IMMUNOTHERAPY', value: 'IMMUNOTHERAPY' },
      { label: 'RADIOTHERAPY', value: 'RADIOTHERAPY', checked: true },
      { label: 'SURGERY', value: 'SURGERY' },
      { label: 'OTHERS', value: 'OTHERS' }
    ];

  }

  getAllOrgans()
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllOrgans().subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllCancerType()
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllCancerType().subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getCancerTypeBasedOnOrgan(organID:number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getCancerTypeBasedOnOrgan(organID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllTumorClassification(cancerTypeID:number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllTumorClassification(cancerTypeID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllTumorGrade(cancerTypeID:number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllTumorGrade(cancerTypeID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllTumorSubType(cancerTypeID:number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllTumorSubType(cancerTypeID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllHistopathologicalType(cancerTypeID:number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllHistopathologicalType(cancerTypeID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllPathologicalType(cancerTypeID:number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllPathologicalType(cancerTypeID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllStaging(cancerTypeID:number)
  {
    let list;
    this.cancerRelatedPredefinedDataService.getAllStaging(cancerTypeID).subscribe(results => {
/*
            for(let data of results)
            {
              list.push({name: data.name, id: data.id, staging_type: data.staging_type, staging_subtype: data.staging_subtype, cancer_type_id: data.cancer_type_id});
            }
*/
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllStageBasedOnTNM(t:number, n:number, m:number)
  {
    this.cancerRelatedPredefinedDataService.getAllStageBasedOnTNM(t, n, m).subscribe(results => {
      return results;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return null;
  }

  getAllDivision()
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllDivision().subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }

  getAllDiscrictsOfDivision(divisionID: number)
  {
    let list=[];
    this.cancerRelatedPredefinedDataService.getAllDiscrictsOfDivision(divisionID).subscribe(results => {
      for(let data of results)
      {
        list.push({label: data.name, value: data.id});
      }
      return list;
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });
    return list;
  }





}
