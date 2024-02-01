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
export declare type ItemsUpdateFormInputValues = {
    name?: string;
    description?: string;
    tag?: string;
    category?: string;
    value?: number;
    date?: string;
    note?: string;
    teamMembers?: string[];
};
export declare type ItemsUpdateFormValidationValues = {
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
export declare type ItemsUpdateFormOverridesProps = {
    ItemsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tag?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
    teamMembers?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    items?: any;
    onSubmit?: (fields: ItemsUpdateFormInputValues) => ItemsUpdateFormInputValues;
    onSuccess?: (fields: ItemsUpdateFormInputValues) => void;
    onError?: (fields: ItemsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemsUpdateFormInputValues) => ItemsUpdateFormInputValues;
    onValidate?: ItemsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemsUpdateForm(props: ItemsUpdateFormProps): React.ReactElement;
