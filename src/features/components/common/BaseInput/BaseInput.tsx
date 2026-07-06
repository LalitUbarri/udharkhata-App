import { useState } from "react";
import {
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";

import { Icon } from "@/features/components/common/Icon";

import { styles } from "./styles";
import { BaseInputProps } from "./types";

export function BaseInput({
  label,
  error,
  required,
  leftIcon,
  rightIcon,
  password = false,
  editable = true,
  ...props
}: BaseInputProps) {
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(password);

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && (
            <Text style={styles.required}> *</Text>
          )}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          focused && styles.focused,
          !editable && styles.disabled,
        ]}
      >
        {leftIcon && (
          <View style={styles.iconLeft}>
            {leftIcon}
          </View>
        )}

        <TextInput
          {...props}
          style={styles.input}
          editable={editable}
          secureTextEntry={secure}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {password ? (
          <Pressable
            onPress={() => setSecure(!secure)}
            style={styles.iconRight}
          >
            <Icon
              name={
                secure
                  ? "eye-off-outline"
                  : "eye-outline"
              }
            />
          </Pressable>
        ) : (
          rightIcon && (
            <View style={styles.iconRight}>
              {rightIcon}
            </View>
          )
        )}
      </View>

      {error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}