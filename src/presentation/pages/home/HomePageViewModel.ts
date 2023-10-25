import { useEffect, useMemo, useState, useCallback } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import NLPModelDataSourceImpl from "../../../data/dataSource/API/NLPModelDataSourceImpl";
import NLPModelRepositoryImpl from "../../../data/repository/NLPModelRepositoryImpl";
import { Translate } from "../../../domain/useCase/nlpModel/Translate";

export default function HomePageViewModel() {
  const [fromText, setFromText] = useState<string>("");
  const [toText, setToText] = useState<string>("");
  const debounceFromText = useDebounce(fromText, 400);

  const nlpModelDataSourceImpl = useMemo(
    () => new NLPModelDataSourceImpl(),
    []
  );
  const nlpModelRepositoryImpl = useMemo(
    () => new NLPModelRepositoryImpl(nlpModelDataSourceImpl),
    [nlpModelDataSourceImpl]
  );

  const translateUseCase = useMemo(
    () => new Translate(nlpModelRepositoryImpl),
    [nlpModelRepositoryImpl]
  );

  const translate = useCallback(
    async (sentence: string) => {
      const result = await translateUseCase.invoke(sentence);
      setToText(result.sentence);
    },
    [translateUseCase]
  );

  useEffect(() => {
    if (debounceFromText.length != 0) {
      translate(debounceFromText);
    }

    return () => setToText("");
  }, [debounceFromText, translate]);

  return {
    fromText,
    setFromText,
    toText,
    setToText,
  };
}
