import { useState } from "react";

import * as Styles from "./styles";

const Dropdown = ({ header, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Styles.DropdownWrapper>
      <Styles.DropdownHeader open={menuOpen}>
        <>{header}</>

        <Styles.DropdownToogle
          open={menuOpen}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!menuOpen);
          }}
        >
          <span />
        </Styles.DropdownToogle>
      </Styles.DropdownHeader>

      {menuOpen && (
        <Styles.DropdowContainer>{children}</Styles.DropdowContainer>
      )}
    </Styles.DropdownWrapper>
  );
};

export default Dropdown;
