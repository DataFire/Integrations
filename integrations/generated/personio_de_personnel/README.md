# @datafire/personio_de_personnel

Client library for Personnel Data

## Installation and Usage
```bash
npm install --save @datafire/personio_de_personnel
```
```js
let personio_de_personnel = require('@datafire/personio_de_personnel').create({
  auth: ""
});

personio_de_personnel.company.employees.get({}).then(data => {
  console.log(data);
});
```

## Description

API for reading and writing personnel data incl. data about attendances and absences

## Actions

### company.attendance_periods.get
List Attendance Periods


```js
personio_de_personnel.company.attendance_periods.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AttendancePeriodsResponse](#attendanceperiodsresponse)

### company.employees.get
List Employees


```js
personio_de_personnel.company.employees.get({}, context)
```

#### Input
* input `object`
  * query `string`: [In development] Query string to perform search on. Returns all employees if not present. Can also be used with custom attributes, e.g. `dynamic_9382=abcd`
  * attributes `array`: [In development] Attributes to be returend for employees found. Returns all available attributes if not present. Pass `attributes` multiple times of needed.

#### Output
* output [EmployeesResponse](#employeesresponse)

### company.employees.employee_id.get
Employee


```js
personio_de_personnel.company.employees.employee_id.get({
  "employee_id": 0
}, context)
```

#### Input
* input `object`
  * employee_id **required** `number`: Numeric `id` of the employee

#### Output
* output [EmployeeResponse](#employeeresponse)

### company.employees.employee_id.attendance_periods.post
Create new attendance period


```js
personio_de_personnel.company.employees.employee_id.attendance_periods.post({
  "employee_id": 0,
  "body": {
    "start_time": "",
    "end_time": "",
    "break": 0,
    "comment": ""
  }
}, context)
```

#### Input
* input `object`
  * employee_id **required** `number`: Numeric `id` of the User to perform action with.
  * body **required** [NewAttendancePeriodRequest](#newattendanceperiodrequest)

#### Output
* output [NewAttendancePeriodResponse](#newattendanceperiodresponse)

### company.time_off.time_off_id.get
Absence Period


```js
personio_de_personnel.company.time_off.time_off_id.get({
  "time_off_id": 0
}, context)
```

#### Input
* input `object`
  * time_off_id **required** `number`: Numeric `id` of the absence period

#### Output
* output [AbsencePeriodResponse](#absenceperiodresponse)

### company.time_offs.get
List All Absence Periods


```js
personio_de_personnel.company.time_offs.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AbsencePeriodsResponse](#absenceperiodsresponse)



## Definitions

### AbsencePeriodResponse
* AbsencePeriodResponse `object`

### AbsencePeriodsResponse
* List All Absence Periods response `object`
  * data **required** `object`
  * success **required** `boolean`
  * data `object`
    * attributes **required** `array`
      * items `object`
        * certificate `object`
          * status `string`
        * created_at `string`
        * days_count `number`
        * employee `object`
          * attributes `array`
            * items `object`
              * email `string`
              * first_name `string`
              * last_name `string`
          * type `string`
        * end_date `string`
        * half_day_end `number`
        * half_day_start `number`
        * start_date `string`
        * status `string`
        * time_off_type `object`
          * attributes `array`
            * items `object`
              * name `string`
          * type `string`
    * type **required** `string`

### AttendancePeriodsResponse
* AttendancePeriodsResponse `object`

### Attribute
* Attribute `object`
  * label **required** `string`
  * value **required** `object`

### CostCenters
* CostCenters `object`
  * value `array`
    * items `object`
      * attributes `array`
        * items `object`
          * id `number`
          * name `string`
          * percentage `number`
      * type `string`
  * label **required** `string`
  * value **required** `object`

### Department
* Department `object`
  * value `object`
    * attributes `array`
      * items `object`
        * name `string`
    * type `string`
  * label **required** `string`
  * value **required** `object`

### Employee
* Employee `object`
  * attributes **required** `array`
    * items `object`
      * contract_end_date [Attribute](#attribute)
      * cost_centers [CostCenters](#costcenters)
      * created_at [Attribute](#attribute)
      * department [Department](#department)
      * email [Attribute](#attribute)
      * employment_type [Attribute](#attribute)
      * first_name [Attribute](#attribute)
      * fix_salary [Attribute](#attribute)
      * gender [Attribute](#attribute)
      * hire_date [Attribute](#attribute)
      * hourly_salary [Attribute](#attribute)
      * id [Attribute](#attribute)
      * last_name [Attribute](#attribute)
      * office [Office](#office)
      * position [Attribute](#attribute)
      * probation_period_end [Attribute](#attribute)
      * status [Attribute](#attribute)
      * termination_date [Attribute](#attribute)
      * termination_reason [Attribute](#attribute)
      * termination_type [Attribute](#attribute)
      * vacation_day_balance [Attribute](#attribute)
      * weekly_working_hours [Attribute](#attribute)
  * type **required** `string`

### EmployeeResponse
* Employee
  * data **required** `object`
  * success **required** `boolean`
  * data `object`
    * attributes **required** `array`
      * items `object`
        * contract_end_date [Attribute](#attribute)
        * cost_centers [CostCenters](#costcenters)
        * created_at [Attribute](#attribute)
        * department [Department](#department)
        * email [Attribute](#attribute)
        * employment_type [Attribute](#attribute)
        * first_name [Attribute](#attribute)
        * fix_salary [Attribute](#attribute)
        * gender [Attribute](#attribute)
        * hire_date [Attribute](#attribute)
        * hourly_salary [Attribute](#attribute)
        * id [Attribute](#attribute)
        * last_name [Attribute](#attribute)
        * office [Office](#office)
        * position [Attribute](#attribute)
        * probation_period_end [Attribute](#attribute)
        * status [Attribute](#attribute)
        * termination_date [Attribute](#attribute)
        * termination_reason [Attribute](#attribute)
        * termination_type [Attribute](#attribute)
        * vacation_day_balance [Attribute](#attribute)
        * weekly_working_hours [Attribute](#attribute)
    * type **required** `string`

### EmployeesResponse
* List of Employees
  * data **required** `object`
  * success **required** `boolean`
  * data `array`
    * items `object`
      * attributes **required** `array`
        * items `object`
          * contract_end_date [Attribute](#attribute)
          * cost_centers [CostCenters](#costcenters)
          * created_at [Attribute](#attribute)
          * department [Department](#department)
          * email [Attribute](#attribute)
          * employment_type [Attribute](#attribute)
          * first_name [Attribute](#attribute)
          * fix_salary [Attribute](#attribute)
          * gender [Attribute](#attribute)
          * hire_date [Attribute](#attribute)
          * hourly_salary [Attribute](#attribute)
          * id [Attribute](#attribute)
          * last_name [Attribute](#attribute)
          * office [Office](#office)
          * position [Attribute](#attribute)
          * probation_period_end [Attribute](#attribute)
          * status [Attribute](#attribute)
          * termination_date [Attribute](#attribute)
          * termination_reason [Attribute](#attribute)
          * termination_type [Attribute](#attribute)
          * vacation_day_balance [Attribute](#attribute)
          * weekly_working_hours [Attribute](#attribute)
      * type **required** `string`

### NewAttendancePeriodRequest
* Create a New Attendance Period request `object`
  * break **required** `integer`
  * comment **required** `string`
  * end_time **required** `string`
  * start_time **required** `string`

### NewAttendancePeriodResponse
* NewAttendancePeriodResponse `object`

### Office
* Office `object`
  * value `object`
    * attributes `array`
      * items `object`
        * name `string`
    * type `string`
  * label **required** `string`
  * value **required** `object`

### Response
* Default response object `object`
  * data **required** `object`
  * success **required** `boolean`


