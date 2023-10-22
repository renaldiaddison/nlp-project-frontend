import {useEffect, useState} from "react";
import {useDebounce} from "@uidotdev/usehooks";

export default function HomePageViewModel() {

    const [fromLanguage, setFromLanguage] = useState<string>("Indonesian")
    const [toLanguage, setToLanguage] = useState<string>("English")
    const [fromText, setFromText] = useState<string>("")
    const [toText, setToText] = useState<string>("")
    const debounceFromText = useDebounce(fromText, 400);

    useEffect(() => {
        // hit ke api
    }, [debounceFromText, fromLanguage, toLanguage])

    return {
        fromLanguage,
        setFromLanguage,
        toLanguage,
        setToLanguage,
        fromText,
        setFromText,
        toText,
        setToText
    }

}