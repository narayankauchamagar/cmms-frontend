import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from '../../../../store';
import PartQuantity from '../../../../models/owns/partQuantity';
import SelectParts from './SelectParts';
import { randomInt } from 'src/utils/generators';
import PartQuantitiesList from '../PartQuantitiesList';

interface SelectPartQuantitiesProps {
  onChange: (partQuantities: PartQuantity[]) => void;
  selected: PartQuantity[];
}

export default function SelectPartQuantities({
  onChange,
  selected
}: SelectPartQuantitiesProps) {
  const [partQuantities, setPartQuantities] = useState<PartQuantity[]>([]);

  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const onPartQuantityChange = (value: string, partQuantity) => {
    let partQuantitiesClone = [...partQuantities];
    partQuantitiesClone = partQuantitiesClone.map((pq) => {
      if (pq.id === partQuantity.id) {
        return { ...pq, quantity: Number(value) };
      }
      return pq;
    });
    setPartQuantities(partQuantitiesClone);
    onChange(partQuantitiesClone);
  };
  return (
    <>
      <PartQuantitiesList
        partQuantities={partQuantities}
        onChange={onPartQuantityChange}
      />
      <SelectParts
        selected={partQuantities.map((partQuantity) => partQuantity.part.id)}
        onChange={(newParts) => {
          const newPartQuantities = newParts.map((part) => {
            return {
              part,
              quantity: 0,
              id: randomInt(),
              createdAt: new Date().toDateString(),
              createdBy: null,
              updatedAt: null,
              updatedBy: null
            };
          });
          setPartQuantities(newPartQuantities);
        }}
      />
    </>
  );
}
