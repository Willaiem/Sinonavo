import { Image } from "react-native"

import { LanguagesISO } from "@sinonavo/types"
import countriesFlagsLinks from '../../links/countriesflags-link'

export const FlagIcon = ({ iso }: { iso?: LanguagesISO }) => {
  const getFlagSource = () =>
    iso
      ? Image.resolveAssetSource(countriesFlagsLinks[iso])
      : Image.resolveAssetSource(countriesFlagsLinks.NOFLAG)

  return <Image height={16} width={12} source={getFlagSource()} />
}