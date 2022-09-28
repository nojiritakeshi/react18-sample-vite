import { FC } from "react";
import { useQueryClient } from "@tanstack/react-query";
import orgCodeList from "data/org-code-list";
import { getOrganization, getMembers } from "domains/github";
import Members from "components/pages/Members";

const EnhancedMembers: FC<{ enablePrefetch?: boolean }> = ({
  enablePrefetch = false,
}) => {
  const queryClient = useQueryClient();
  const prefetch = (orgCode: string): void => {
    const load = async (): Promise<void> => {
      try {
        await Promise.all([
          queryClient.prefetchQuery([orgCode, "organization"], () =>
            getOrganization(orgCode)
          ),
          queryClient.prefetchQuery([orgCode, "members"], () =>
            getMembers(orgCode)
          ),
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    void load();
  };
  const membersProps = enablePrefetch
    ? { orgCodeList, prefetch }
    : { orgCodeList };

  return <Members {...membersProps} />;
};

export default EnhancedMembers;
