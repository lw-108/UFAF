import { CreateApplicationData, CreateApplicationVariables, GetApplicationData, GetApplicationVariables, UpdateApplicationStatusData, UpdateApplicationStatusVariables, ListApplicationsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateApplication(options?: useDataConnectMutationOptions<CreateApplicationData, FirebaseError, CreateApplicationVariables>): UseDataConnectMutationResult<CreateApplicationData, CreateApplicationVariables>;
export function useCreateApplication(dc: DataConnect, options?: useDataConnectMutationOptions<CreateApplicationData, FirebaseError, CreateApplicationVariables>): UseDataConnectMutationResult<CreateApplicationData, CreateApplicationVariables>;

export function useGetApplication(vars: GetApplicationVariables, options?: useDataConnectQueryOptions<GetApplicationData>): UseDataConnectQueryResult<GetApplicationData, GetApplicationVariables>;
export function useGetApplication(dc: DataConnect, vars: GetApplicationVariables, options?: useDataConnectQueryOptions<GetApplicationData>): UseDataConnectQueryResult<GetApplicationData, GetApplicationVariables>;

export function useUpdateApplicationStatus(options?: useDataConnectMutationOptions<UpdateApplicationStatusData, FirebaseError, UpdateApplicationStatusVariables>): UseDataConnectMutationResult<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
export function useUpdateApplicationStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateApplicationStatusData, FirebaseError, UpdateApplicationStatusVariables>): UseDataConnectMutationResult<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;

export function useListApplications(options?: useDataConnectQueryOptions<ListApplicationsData>): UseDataConnectQueryResult<ListApplicationsData, undefined>;
export function useListApplications(dc: DataConnect, options?: useDataConnectQueryOptions<ListApplicationsData>): UseDataConnectQueryResult<ListApplicationsData, undefined>;
