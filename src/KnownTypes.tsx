import * as React from "react";
import { useQueryDataKey } from "./ParsedQuery";
import { OPT512 } from "./OPT512";
import { parseCoinText } from "./Coin";

interface KnownType {
  index: number;
  "oPT#": number;
  "oPT#+": string;
  "m/F": string;
  saviors: string;
  animals: string;
  typeCode: string;
  doublyActivatedFunctions: string;
  people1: string | null;
  people2: string | null;
  people3: string | null;
  people4: string | null;
  people5: string | null;
  people6: string | null;
  people7: string | null;
  people8: string | null;
  people9: string | null;
  people10: string | null;
  people11: string | null;
  people12: string | null;
  people13: string | null;
  people14: string | null;
}

const KNOWN_TYPES: KnownType[] = require("./known-types.sheet.json");

export function KnownTypes({ addType }) {
  return (
    <div className="type-table">
      <TypeTable addType={addType} kTypes={KNOWN_TYPES.slice(0, 32)} />
      <TypeTable addType={addType} kTypes={KNOWN_TYPES.slice(32, 64)} />
      <TypeTable addType={addType} kTypes={KNOWN_TYPES.slice(64, 96)} />
      <TypeTable addType={addType} kTypes={KNOWN_TYPES.slice(96, 128)} />
    </div>
  );
}

function TypeTable({ kTypes, addType }) {
  return (
    <div className="type-table with-cells">
      <div>{kTypes[0].animals}</div>
      <div>{kTypes[1].animals}</div>
      <div>{kTypes[2].animals}</div>
      <div>{kTypes[3].animals}</div>
      {kTypes.map(kType => (
        <a
          key={kType.typeCode}
          data-optype={kType.typeCode}
          onClick={e => {
            e.preventDefault();
            addType(
              kType.typeCode
                .split("-")
                .slice(1)
                .join("-"),
            );
          }}
        >
          {kType.typeCode.split("-")[1]}
        </a>
      ))}
    </div>
  );
}
