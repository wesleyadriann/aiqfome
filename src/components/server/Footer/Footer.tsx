import React from "react";

const Component = () => (
  <footer
    className="
    bg-(--neutrals-100)
    font-bold
    p-6
    text-(--purple-700)
    text-center"
  >
    <p className="mb-2 text-muted">feito com 💜 em maringá-PR</p>
    <p>aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58</p>
  </footer>
);

export const Footer = React.memo(Component);
