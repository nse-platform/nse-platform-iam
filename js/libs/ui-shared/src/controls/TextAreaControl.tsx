import {
  TextArea,
  TextAreaProps,
  ValidatedOptions,
} from "@patternfly/react-core";
import {
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { FormLabel } from "./FormLabel";

export type TextAreaControlProps<
  T extends FieldValues,
  P extends FieldPath<T> = FieldPath<T>,
> = UseControllerProps<T, P> &
  Omit<TextAreaProps, "onChange" | "value"> & {
    // // 排除掉不想覆盖的 TextAreaProps
    label: string;
    labelIcon?: string;
    isDisabled?: boolean;
  };

export const TextAreaControl = <
  T extends FieldValues,
  P extends FieldPath<T> = FieldPath<T>,
>(
  props: TextAreaControlProps<T, P>,
) => {
  const {
    label,
    labelIcon,
    isDisabled,
    rules,
    defaultValue: dv,
    ...textAreaProps
  } = props;
  const required = !!props.rules?.required;
  const defaultValue = props.defaultValue ?? ("" as PathValue<T, P>);

  const { field, fieldState } = useController({
    ...props,
    defaultValue,
  });

  return (
    <FormLabel
      isRequired={required}
      label={props.label}
      labelIcon={props.labelIcon}
      name={props.name}
      error={fieldState.error}
    >
      <TextArea
        isRequired={required}
        id={props.name}
        data-testid={props.name}
        validated={
          fieldState.error ? ValidatedOptions.error : ValidatedOptions.default
        }
        isDisabled={props.isDisabled}
        {...textAreaProps}
        {...field}
      />
    </FormLabel>
  );
};
