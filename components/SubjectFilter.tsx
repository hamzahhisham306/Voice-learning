"use client";
import React, { useEffect, useState, useTransition } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { cn } from "@/lib/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const [subject, setSubject] = useState(searchParams.get("subject") || "");

    useEffect(() => {
        const currentSubject = searchParams.get("subject") || "";
        const normalized = subject === "all" ? "" : subject;
        // Skip navigation when nothing actually changed (e.g. on mount).
        if (normalized === currentSubject) return;

        const newUrl = normalized
            ? formUrlQuery({
                  params: searchParams.toString(),
                  key: "subject",
                  value: normalized,
              })
            : removeKeysFromUrlQuery({
                  params: searchParams.toString(),
                  keysToRemove: ["subject"],
              });

        startTransition(() => router.push(newUrl, { scroll: false }));
    }, [subject, router, searchParams]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className={cn("input capitalize", isPending && "opacity-70")}>
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;
