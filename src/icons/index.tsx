import { styled } from "../theme/styled";
import * as React from "react";
const Svg = styled("svg")`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;
interface ISvg extends React.ComponentProps<typeof Svg> {}

export const Close = React.forwardRef<SVGSVGElement, ISvg>((props, ref) => {
  return (
    <Svg viewBox="0 0 60.963 60.842" {...props} ref={ref}>
      <path d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611  c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611  l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369  l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369  C61.42,57.647,61.42,54.687,59.595,52.861z" />
    </Svg>
  );
});
