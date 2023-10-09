import React from "react";

interface CryptoIconProps extends React.SVGProps<SVGSVGElement> {
  name?: string;
}

const CryptoIcon: React.FunctionComponent<CryptoIconProps> = ({
  name = "",
}) => <img src={`/tokens/${name}.svg`} />;

export default CryptoIcon;
