import styled from "styled-components";

const wrapper = (component: any) => {
  return styled(component);
};

const BoxSC = styled(`h2`)`
  text-align: center;
`;
const BoxWrapper = wrapper(`h2`)`
  text-align: center;
`;

export default function Home() {
  return (
    <div>
      <main>
        <BoxSC>- This component is fine - 1</BoxSC>
        <BoxWrapper>
          - This component triggers a mismatch when modified - 2
        </BoxWrapper>
      </main>
    </div>
  );
}
