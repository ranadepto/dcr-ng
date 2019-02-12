import {Component} from '@angular/core';
import {UploadFile} from "ng-zorro-antd";
import {AppComponent} from "../../app.component";
import {AddPatientList} from "./add-patient-list";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent extends AppComponent{

  addPatientForm: FormGroup;

  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  division;
  district;
  t;
  n;
  m;
  religion;
  date_of_birth;
  nid;
  permanent_address;
  present_address;
  zip_code;
  doctor_id;
  date_of_diagnosis;
  cancer_type;
  cancer_subtype;
  histopathological;
  organ;
  pathological;
  tumor_classification;
  tumor_grade;
  cancer_stage;
  guardian_name;
  blood_group;
  emergency_phone;
  duration_year;
  duration_month;
  first_treatment_recommend:string;
  is_use_tobacco;
  is_smoking;
  is_non_smoking;


  outcome;
  type;
  subtype;

  selectedStage: string;

  listOfOptionGender=[];
  listOfOptionReligion=[];
  listOfOptionBloodGroup=[];
  listOfOptionOutcome=[];
  listOfOptionOrgan=[];
  listOfOptionType=[];
  listOfOptionSubtype=[];
  listOfOptionT=[];
  listOfOptionN=[];
  listOfOptionM=[];
  listOfOptionStageJSON=[];
  listOfOptionHisType=[];
  listOfOptionTumorClassification=[];
  listOfOptionGrading=[];
  listOfOptionPathNode=[];
  listOfOptionDivision=[];
  listOfOptionDistrict=[];
  moreRecommendationOptions = [];

  public addPatientList: AddPatientList;

  listInitialisation()
  {
    this.addPatientList = new AddPatientList(this.cancerRelatedPredefinedDataService);

    this.listOfOptionGender=this.addPatientList.getGenderList();
    this.listOfOptionReligion=this.addPatientList.getReligionList();
    this.listOfOptionBloodGroup=this.addPatientList.getBloodGroupList();
    this.moreRecommendationOptions=this.addPatientList.getMoreRecommendedOptionList();
    this.listOfOptionOrgan=this.addPatientList.getAllOrgans();
    this.listOfOptionDivision=this.addPatientList.getAllDivision();


  }


  ngOnInit() {
    this.listInitialisation();

    this.addPatientForm = this.fb.group({
      is_smoking: [null],
      amount: [null],
      first_name: [null],
    last_name: [null],
    email: [null],
    phone: [null],
    gender: [null],
    division: [null],
    district: [null],
    t: [null],
    n: [null],
    m: [null],
    religion: [null],
    date_of_birth: [null],
    nid: [null],
    permanent_address: [null],
    present_address: [null],
      blood_group: [null],
      cancer_type: [null],
    cancer_subtype: [null],
    histopathological: [null],
    organ: [null],
    pathological: [null],
      tumor_classification: [null],
    tumor_grade: [null],
    cancer_stage: [null],
    guardian_name: [null],
    emergency_phone: [null],
    duration_year: [null],
    duration_month: [null],
      first_treatment_recommend: [null],
    is_use_tobacco: [null],
    is_non_smoking: [null],
      moreRecommendationOptions: [null]
  });

  }


  uploaded_images = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.tpub.com/corpsman/14295_files/image428.jpg'
    }
  ];
  previewImage = '';
  previewVisible = false;

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  onDobChange(result: Date): void {
    this.createBasicMessage(result.toString());
  }

  onOrganChange(id: number): void {
    this.addPatientForm.get('cancer_type').setValue('');
    this.addPatientForm.get('cancer_subtype').setValue('');
    this.addPatientForm.get('pathological').setValue('');
    this.addPatientForm.get('cancer_stage').setValue('');
    this.addPatientForm.get('histopathological').setValue('');
    this.addPatientForm.get('tumor_classification').setValue('');
    this.addPatientForm.get('tumor_grade').setValue('');
    this.addPatientForm.get('t').setValue('');
    this.addPatientForm.get('n').setValue('');
    this.addPatientForm.get('m').setValue('');

    this.listOfOptionType=this.addPatientList.getCancerTypeBasedOnOrgan(id);

  }

  onCancerTypeChange(id: number): void {
    if(id===null || id.toString()==='')
    {
      return;
    }

    this.addPatientForm.get('cancer_subtype').setValue('');
    this.addPatientForm.get('pathological').setValue('');
    this.addPatientForm.get('cancer_stage').setValue('');
    this.addPatientForm.get('histopathological').setValue('');
    this.addPatientForm.get('tumor_classification').setValue('');
    this.addPatientForm.get('tumor_grade').setValue('');
    this.addPatientForm.get('t').setValue('');
    this.addPatientForm.get('n').setValue('');
    this.addPatientForm.get('m').setValue('');

    this.listOfOptionTumorClassification = this.addPatientList.getAllTumorClassification(id);
      this.listOfOptionSubtype = this.addPatientList.getAllTumorSubType(id);
      this.listOfOptionHisType = this.addPatientList.getAllHistopathologicalType(id);
      this.listOfOptionPathNode = this.addPatientList.getAllPathologicalType(id);
      this.listOfOptionStageJSON = this.addPatientList.getAllStaging(id);

      this.listOfOptionT=[];
      this.listOfOptionN=[];
      this.listOfOptionM=[];


    this.cancerRelatedPredefinedDataService.getAllStaging(id).subscribe(results => {
      this.listOfOptionStageJSON=results;
      for(let data of results)
      {
        if(data.staging_type==='T')
        {
          this.listOfOptionT.push({label: data.name, value: data.id});
        }
        else if(data.staging_type==='N')
        {
          this.listOfOptionN.push({label: data.name, value: data.id});
        }
        else if(data.staging_type==='M')
        {
          this.listOfOptionM.push({label: data.name, value: data.id});
        }
      }
    }, error => {
      /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
    });

      this.listOfOptionGrading = this.addPatientList.getAllTumorGrade(id);
  }

  onTNMChange(): void {
    if(this.addPatientForm.get('t').value && this.addPatientForm.get('n').value && this.addPatientForm.get('m').value) {
      this.cancerRelatedPredefinedDataService.getAllStageBasedOnTNM(this.addPatientForm.get('t').value, this.addPatientForm.get('n').value, this.addPatientForm.get('m').value).subscribe(results => {
        this.selectedStage=results.stage;
      }, error => {
        /* this.createNotification('error', 'Error Occured', JSON.stringify(error)); */
      });
    }
  }

  onDivisionChange(id: number): void {
    this.district='';
    this.listOfOptionDistrict=this.addPatientList.getAllDiscrictsOfDivision(id);
  }


  patientFormSubmit(): void
  {
    this.createNotification('info', 'Form Data', JSON.stringify(this.addPatientForm.value));

  }

}
