import {useEffect, useState} from "react";
import {useDebounce} from "@uidotdev/usehooks";

export default function HomePageViewModel() {

    const [fromText, setFromText] = useState<string>("")
    const [toText, setToText] = useState<string>("")
    const debounceFromText = useDebounce(fromText, 400);

    useEffect(() => {
        // hit ke api
    }, [debounceFromText])

    return {
        fromText,
        setFromText,
        toText,
        setToText
    }

}