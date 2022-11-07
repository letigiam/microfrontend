export interface FormattedResponse {
    count?: number;
    result: any;
    status: boolean;
    total?: number;
    message?: string;
}

export interface FormattedResponseType<T> {
	count?: number;
	result: T;
	status: boolean;
	total?: number;
	message?: string;
}

