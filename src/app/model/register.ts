export class Register {
UserName:string;
Mobile_Number :string;
Name:string;
Password :string;
Gender: string;
Age :number;
Email:string;
Address1 :string;
Address2:string;
District:string;
State:string;
constructor(UserName:string="",Mobile_Number:string="",Name:string="",Password:string="",Age:number=0,Email:string="",Address1:string="",
Address2:string="",District:string="",State:string=""){
    this.UserName=UserName;
    this.Mobile_Number=Mobile_Number;
    this.Name=Name;
    this.Password=Password;
    this.Age=Age;
    this.Email=Email;
    this.Address1=Address1;
    this.Address2=Address2;
    this.District=District;
    this.State=State;
}
}
