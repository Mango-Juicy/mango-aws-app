/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemsCreateFormInputValues = {
    name?: string;
    description?: string;
    tag?: string;
    category?: string;
    value?: number;
    date?: string;
    note?: string;
    teamMembers?: string[];
};
export declare type ItemsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tag?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    date?: ValidationFunction<string>;
    note?: ValidationFunction<string>;
    teamMembers?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemsCreateFormOverridesProps = {
    ItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tag?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
    teamMembers?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemsCreateFormInputValues) => ItemsCreateFormInputValues;
    onSuccess?: (fields: ItemsCreateFormInputValues) => void;
    onError?: (fields: ItemsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemsCreateFormInputValues) => ItemsCreateFormInputValues;
    onValidate?: ItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemsCreateForm(props: ItemsCreateFormProps): React.ReactElement;
