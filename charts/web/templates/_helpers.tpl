{{/*
Create the name of the service account to use
*/}}
{{- define "web.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "common.names.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Return the image name
*/}}
{{- define "web.image" -}}
{{- $imageRoot := .Values.image -}}
{{- $_ := set $imageRoot "tag" (.Values.image.tag | default .Chart.AppVersion) -}}
{{- include "common.images.image" (dict "imageRoot" $imageRoot "global" $) -}}
{{- end -}}

{{/*
Return true if cert-manager annotations for TLS-signed certificates are set
Ref: https://cert-manager.io/docs/usage/ingress/#supported-annotations
*/}}
{{- define "web.ingress.certManagerRequest" -}}
{{ if or (hasKey . "cert-manager.io/cluster-issuer") (hasKey . "cert-manager.io/issuer") }}
{{- true -}}
{{- end -}}
{{- end -}}
