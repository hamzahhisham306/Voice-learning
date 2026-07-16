'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState, useTransition} from "react";
import Image from "next/image";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const [searchQuery, setSearchQuery] = useState(searchParams.get('topic') || '');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const currentTopic = searchParams.get('topic') || '';
            // Skip navigation when nothing actually changed (e.g. on mount).
            if (searchQuery === currentTopic) return;

            let newUrl = '';
            if (searchQuery) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });
            } else if (pathname === '/companions') {
                newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["topic"],
                });
            }

            if (newUrl) {
                startTransition(() => router.push(newUrl, { scroll: false }));
            }
        }, 400);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, router, searchParams, pathname]);

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                placeholder="Search companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {isPending && (
                <div className="size-4 shrink-0 rounded-full border-2 border-black/20 border-t-black animate-spin" />
            )}
        </div>
    )
}
export default SearchInput
