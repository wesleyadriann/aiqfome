import React from "react";

type ISectionTitleProps = {
  title: string;
  subtitle: string;
  rightLabelText?: string;
};

const Component: React.FC<ISectionTitleProps> = ({
  title,
  subtitle,
  rightLabelText,
}) => {
  return (
    <div className="flex items-center">
      <div className="flex-1 font-bold">
        <p>{title}</p>
        <p className="text-xs text-(--text-secondary)">{subtitle}</p>
      </div>
      {rightLabelText && (
        <div
          className="bg-(--neutrals-700)
        font-bold
        px-2
        py-1.5
        rounded-md
        text-white
        text-xs"
        >
          {rightLabelText}
        </div>
      )}
    </div>
  );
};

export const SectionTitle = React.memo(Component);
