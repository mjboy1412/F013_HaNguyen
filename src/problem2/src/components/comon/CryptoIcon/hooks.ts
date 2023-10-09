import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as DefaultIcon } from "assets/icons/svg/tokens/default.svg";

export const useDynamicSVGImport = (iconName: string) => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!assets/icons/svg/tokens/${iconName}.svg`
          )
        ).default;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (message.includes("Cannot find module"))
          setErrorMessage("Currency icon not found");
        else setErrorMessage(message);
        ImportedIconRef.current = DefaultIcon;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [iconName]);

  return { errorMessage, loading, SvgIcon: ImportedIconRef.current };
};
