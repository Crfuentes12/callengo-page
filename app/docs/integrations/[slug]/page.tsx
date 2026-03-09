import { redirect } from "next/navigation";

export default async function DocsIntegrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/integrations/${slug}`);
}
