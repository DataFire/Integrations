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

.then(data => {
  console.log(data);
});
```

## Description

API for reading and writing personnel data incl. data about attendances and absences

## Actions

### company.attendances.get
This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of attendance periods, structured as defined here.


```js
personio_de_personnel.company.attendances.get({
  "start_date": "",
  "end_date": ""
}, context)
```

#### Input
* input `object`
  * start_date **required** `string`: First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results
  * end_date **required** `string`: Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.
  * employees `array`: A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.
  * limit `integer`: Pagination attribute to limit how many attendances will be returned per page
  * offset `integer`: Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.

#### Output
* output [AttendancePeriodsResponse](#attendanceperiodsresponse)

### company.attendances.post
This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.


```js
personio_de_personnel.company.attendances.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [NewAttendancePeriodRequest](#newattendanceperiodrequest)

#### Output
* output [NewAttendancePeriodResponse](#newattendanceperiodresponse)

### company.attendances.id.delete
This endpoint is responsible for deleting attendance data for the company employees.


```js
personio_de_personnel.company.attendances.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the attendance period to delete

#### Output
* output [Response](#response)

### company.attendances.id.patch
This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.


```js
personio_de_personnel.company.attendances.id.patch({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the attendance period to update
  * body **required** [UpdateAttendancePeriodRequest](#updateattendanceperiodrequest)

#### Output
* output [Response](#response)

### company.employees.get
List Employees


```js
personio_de_personnel.company.employees.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [EmployeesResponse](#employeesresponse)

### company.employees.post
Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.



```js
personio_de_personnel.company.employees.post({
  "employee[email]": "",
  "employee[first_name]": "",
  "employee[last_name]": ""
}, context)
```

#### Input
* input `object`
  * employee[department] `string`: Employee department
  * employee[email] **required** `string`: Employee email
  * employee[first_name] **required** `string`: Employee first name
  * employee[gender] `string` (values: male, female, diverse): Employee gender
  * employee[hire_date] `string`: Employee hire date
  * employee[last_name] **required** `string`: Employee last name
  * employee[position] `string`: Employee position
  * employee[weekly_hours] `number`: Employee weekly working hours

#### Output
* output
  * data **required** `object`
  * success **required** `boolean`

### company.employees.employee_id.get
Show employee by ID


```js
personio_de_personnel.company.employees.employee_id.get({
  "employee_id": 0
}, context)
```

#### Input
* input `object`
  * employee_id **required** `integer`: Numeric `id` of the employee

#### Output
* output [EmployeeResponse](#employeeresponse)

### company.employees.employee_id.profile_picture.width.get
Show employee profile picture


```js
personio_de_personnel.company.employees.employee_id.profile_picture.width.get({
  "employee_id": 0,
  "width": 0
}, context)
```

#### Input
* input `object`
  * employee_id **required** `integer`: Numeric `id` of the employee
  * width **required** `integer`: Width of the image. Default 75x75

#### Output
* output `string`

### company.time_off_types.get
Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'


```js
personio_de_personnel.company.time_off_types.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Pagination attribute to limit how many records will be returned per page
  * offset `integer`: Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.

#### Output
* output `object`
  * data `array`
    * items [TimeOffTypeResource](#timeofftyperesource)
  * success `boolean`

### company.time_offs.get
This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.


```js
personio_de_personnel.company.time_offs.get({}, context)
```

#### Input
* input `object`
  * start_date `string`: First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results
  * end_date `string`: Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.
  * employees `array`: A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.
  * limit `integer`: Pagination attribute to limit how many attendances will be returned per page
  * offset `integer`: Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.

#### Output
* output [AbsencePeriodsResponse](#absenceperiodsresponse)

### company.time_offs.post
This endpoint is responsible for adding absence data for the company employees.


```js
personio_de_personnel.company.time_offs.post({
  "body": {
    "employee_id": 0,
    "time_off_type_id": 0,
    "start_date": "",
    "end_date": "",
    "half_day_start": true,
    "half_day_end": true
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateTimeOffPeriodRequest](#createtimeoffperiodrequest)

#### Output
* output `object`
  * data [CreateTimeOffPeriodResponse](#createtimeoffperiodresponse)

### company.time_offs.id.delete
This endpoint is responsible for deleting absence period data for the company employees.


```js
personio_de_personnel.company.time_offs.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the absence period to delete

#### Output
* output [Response](#response)

### company.time_offs.id.get
Absence Period


```js
personio_de_personnel.company.time_offs.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Numeric `id` of the absence period

#### Output
* output [AbsencePeriodResponse](#absenceperiodresponse)



## Definitions

### AbsenceEntitlement
* AbsenceEntitlement `object`
  * label **required** `string`
  * value **required** `array`
    * items `object`
      * attributes `object`
        * entitlement `number`
        * id `integer`
        * name `string`
      * type `string` (values: TimeOffType)

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
          * type `string`
        * end_date `string`
        * half_day_end `number`
        * half_day_start `number`
        * id `integer`
        * start_date `string`
        * status `string`
        * time_off_type `object`
          * attributes `array`
          * type `string`
    * type **required** `string`

### AttendancePeriodsResponse
* List All Attenance Periods response `object`
  * data **required** `object`
  * success **required** `boolean`
  * data `array`
    * items `object`
      * attributes **required** `array`
        * items `object`
          * break **required** `integer`
          * comment **required** `string`
          * date **required** `string`
          * employee **required** `integer`
          * end_time **required** `string`
          * is_holiday **required** `boolean`
          * is_on_time_off **required** `boolean`
          * start_time **required** `string`
      * id **required** `integer`
      * type **required** `string`
  * limit `integer`
  * offset `integer`

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

### CreateTimeOffPeriodRequest
* Create time-off periods `object`
  * comment `string`: Optional comment
  * employee_id **required** `integer`: Employee identifier
  * end_date **required** `string`: Absence end date as YYYY-MM-DD
  * half_day_end **required** `boolean`: Weather the end date is a half-day off
  * half_day_start **required** `boolean`: Weather the start date is a half-day off
  * start_date **required** `string`: Absence start date as YYYY-MM-DD
  * time_off_type_id **required** `integer`: Time-off type identifier

### CreateTimeOffPeriodResponse
* Time period when an employee is not available.
  * data **required** `object`
  * success **required** `boolean`
  * data `object`
    * attributes `object`
      * certificate `object`
        * status `string`
      * created_at `string`
      * days_count `number`
      * employee `object`
        * attributes `array`
          * items `object`
        * type `string`
      * end_date `string`
      * half_day_end `number`
      * half_day_start `number`
      * id `integer`
      * start_date `string`
      * status `string`
      * time_off_type `object`
        * attributes `array`
          * items `object`
        * type `string`
    * type `string` (values: TimeOffPeriod): Time-off period resource name

### Department
* Department `object`
  * value `object`
    * attributes `object`
      * name `string`
    * type `string`
  * label **required** `string`
  * value **required** `object`

### DetailedErrorResponse
* Default error response `object`
  * error **required** `object`
    * code `integer`
    * detailed_message `array`
      * items `object`
        * break `integer`
        * comment `string`
        * date `string`
        * employee `integer`
        * end_time `string`
        * error_msg `string`
        * id `integer`
        * start_time `string`
        * success `boolean`
    * message `string`
  * success **required** `boolean`

### Employee
* Employee `object`
  * attributes **required** `array`
    * items `object`
      * absence_entitlement [AbsenceEntitlement](#absenceentitlement)
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
      * holiday_calendar [HolidayCalendar](#holidaycalendar)
      * hourly_salary [Attribute](#attribute)
      * id [Attribute](#attribute)
      * last_name [Attribute](#attribute)
      * office [Office](#office)
      * position [Attribute](#attribute)
      * probation_period_end [Attribute](#attribute)
      * status [Attribute](#attribute)
      * supervisor [Supervisor](#supervisor)
      * termination_date [Attribute](#attribute)
      * termination_reason [Attribute](#attribute)
      * termination_type [Attribute](#attribute)
      * vacation_day_balance [Attribute](#attribute)
      * weekly_working_hours [Attribute](#attribute)
      * work_schedule [WorkSchedule](#workschedule)
  * type **required** `string`

### EmployeeResponse
* Employee
  * data **required** `object`
  * success **required** `boolean`
  * data `object`
    * attributes **required** `array`
      * items `object`
        * absence_entitlement [AbsenceEntitlement](#absenceentitlement)
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
        * holiday_calendar [HolidayCalendar](#holidaycalendar)
        * hourly_salary [Attribute](#attribute)
        * id [Attribute](#attribute)
        * last_name [Attribute](#attribute)
        * office [Office](#office)
        * position [Attribute](#attribute)
        * probation_period_end [Attribute](#attribute)
        * status [Attribute](#attribute)
        * supervisor [Supervisor](#supervisor)
        * termination_date [Attribute](#attribute)
        * termination_reason [Attribute](#attribute)
        * termination_type [Attribute](#attribute)
        * vacation_day_balance [Attribute](#attribute)
        * weekly_working_hours [Attribute](#attribute)
        * work_schedule [WorkSchedule](#workschedule)
    * type **required** `string`

### EmployeesResponse
* List of Employees
  * data **required** `object`
  * success **required** `boolean`
  * data `array`
    * items `object`
      * attributes **required** `array`
        * items `object`
          * absence_entitlement [AbsenceEntitlement](#absenceentitlement)
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
          * holiday_calendar [HolidayCalendar](#holidaycalendar)
          * hourly_salary [Attribute](#attribute)
          * id [Attribute](#attribute)
          * last_name [Attribute](#attribute)
          * office [Office](#office)
          * position [Attribute](#attribute)
          * probation_period_end [Attribute](#attribute)
          * status [Attribute](#attribute)
          * supervisor [Supervisor](#supervisor)
          * termination_date [Attribute](#attribute)
          * termination_reason [Attribute](#attribute)
          * termination_type [Attribute](#attribute)
          * vacation_day_balance [Attribute](#attribute)
          * weekly_working_hours [Attribute](#attribute)
          * work_schedule [WorkSchedule](#workschedule)
      * type **required** `string`

### ErrorResponse
* Default error response `object`
  * error **required** `object`
    * code `integer`
    * message `string`
  * success **required** `boolean`

### HolidayCalendar
* HolidayCalendar `object`
  * value `object`
    * attributes `object`
      * country `string`
      * id `number`
      * name `string`
      * state `string`
    * type `string`
  * label **required** `string`
  * value **required** `object`

### NewAttendancePeriodRequest
* Create a New Attendance Period request `object`
  * attendances `array`
    * items `object`
      * break **required** `integer`: Break in minutes
      * comment **required** `string`: Optional comment
      * date **required** `string`: Attendance date as YYYY-MM-DD
      * employee **required** `integer`: Employee identifier
      * end_time **required** `string`: End time as HH:MM
      * start_time **required** `string`: Start time as HH:MM

### NewAttendancePeriodResponse
* NewAttendancePeriodResponse `object`
  * data **required** `object`
  * success **required** `boolean`
  * data `object`
    * id `array`
      * items `integer`
    * message `string`

### Office
* Office `object`
  * value `object`
    * attributes `object`
      * name `string`
    * type `string`
  * label **required** `string`
  * value **required** `object`

### Response
* Default response object `object`
  * data **required** `object`
  * success **required** `boolean`

### Supervisor
* Supervisor `object`
  * value [Employee](#employee)
  * label **required** `string`
  * value **required** `object`

### TimeOffTypeResource
* Type of time-off resource `object`
  * attributes `object`
    * name `string`
  * id `integer`: identifier
  * type `string` (values: TimeOffType): Time-off type resource name

### UpdateAttendancePeriodRequest
* Update an existing attendance period `object`
  * break `integer`: Break in minutes
  * comment `string`: Optional comment
  * date `string`: Attendance date as YYYY-MM-DD
  * end_time `string`: End time as HH:MM
  * start_time `string`: Start time as HH:MM

### WorkSchedule
* WorkSchedule `object`
  * value `object`
    * attributes `object`
      * friday `string`
      * id `number`
      * monday `string`
      * name `string`
      * saturday `string`
      * sunday `string`
      * thursday `string`
      * tuesday `string`
      * wednesday `string`
    * type `string`
  * label **required** `string`
  * value **required** `object`


