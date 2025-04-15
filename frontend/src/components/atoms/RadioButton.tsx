import React from "react";
import { Radio, ConfigProvider } from "antd";
import type { RadioChangeEvent } from "antd";

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (e: RadioChangeEvent) => void;
  children: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  checked,
  onChange,
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0E5814",
        },
      }}
    >
      <div className="custom-radio-container">
        <Radio
          value={value}
          checked={checked}
          onChange={onChange}
          style={{
            marginBottom: "8px",
          }}
        >
          <div className="flex flex-column items-center">
            <span 
              className={`font-inter text-zypsy-span ${checked ? "font-medium" : "font-normal"}`}
              style={{
                fontFamily: "Inter",
                fontWeight: checked ? 500 : 400,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "0%"
              }}
            >
              {children}
            </span>
          </div>
        </Radio>
      </div>

      <style jsx>{`
        .custom-radio-container :global(.ant-radio-inner) {
          border-color: #D9D9D9;
        }
        .custom-radio-container :global(.ant-radio-checked .ant-radio-inner) {
          border-color: #D9D9D9;
          background-color: white;
        }
        .custom-radio-container :global(.ant-radio-checked .ant-radio-inner::after) {
          background-color: #0E5814;
          transform: scale(0.6);
        }
        .custom-radio-container :global(.ant-radio:hover .ant-radio-inner) {
          border-color: #0E5814;
        }
      `}</style>
    </ConfigProvider>
  );
};

export default RadioButton;
