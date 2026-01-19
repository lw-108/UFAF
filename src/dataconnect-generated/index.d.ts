import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface CreateApplicationData {
  application_insert: Application_Key;
}

export interface CreateApplicationVariables {
  applicantId: UUIDString;
  admissionYear: number;
  applyingCourseGrade: string;
  status: string;
  submissionDate: TimestampString;
}

export interface Document_Key {
  id: UUIDString;
  __typename?: 'Document_Key';
}

export interface GetApplicationData {
  application?: {
    id: UUIDString;
    applicantId?: UUIDString | null;
    admissionYear: number;
    applyingCourseGrade: string;
    status: string;
    submissionDate: TimestampString;
  } & Application_Key;
}

export interface GetApplicationVariables {
  id: UUIDString;
}

export interface Guardian_Key {
  id: UUIDString;
  __typename?: 'Guardian_Key';
}

export interface ListApplicationsData {
  applications: ({
    id: UUIDString;
    applicantId?: UUIDString | null;
    admissionYear: number;
    applyingCourseGrade: string;
    status: string;
    submissionDate: TimestampString;
  } & Application_Key)[];
}

export interface Student_Key {
  id: UUIDString;
  __typename?: 'Student_Key';
}

export interface UpdateApplicationStatusData {
  application_update?: Application_Key | null;
}

export interface UpdateApplicationStatusVariables {
  id: UUIDString;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateApplicationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
  operationName: string;
}
export const createApplicationRef: CreateApplicationRef;

export function createApplication(vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;
export function createApplication(dc: DataConnect, vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface GetApplicationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetApplicationVariables): QueryRef<GetApplicationData, GetApplicationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetApplicationVariables): QueryRef<GetApplicationData, GetApplicationVariables>;
  operationName: string;
}
export const getApplicationRef: GetApplicationRef;

export function getApplication(vars: GetApplicationVariables): QueryPromise<GetApplicationData, GetApplicationVariables>;
export function getApplication(dc: DataConnect, vars: GetApplicationVariables): QueryPromise<GetApplicationData, GetApplicationVariables>;

interface UpdateApplicationStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateApplicationStatusVariables): MutationRef<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateApplicationStatusVariables): MutationRef<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
  operationName: string;
}
export const updateApplicationStatusRef: UpdateApplicationStatusRef;

export function updateApplicationStatus(vars: UpdateApplicationStatusVariables): MutationPromise<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
export function updateApplicationStatus(dc: DataConnect, vars: UpdateApplicationStatusVariables): MutationPromise<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;

interface ListApplicationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListApplicationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListApplicationsData, undefined>;
  operationName: string;
}
export const listApplicationsRef: ListApplicationsRef;

export function listApplications(): QueryPromise<ListApplicationsData, undefined>;
export function listApplications(dc: DataConnect): QueryPromise<ListApplicationsData, undefined>;

