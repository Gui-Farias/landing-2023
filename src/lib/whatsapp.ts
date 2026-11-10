const url = 'https://wa.me/5511910529070';

export function whatsappLink(message?: string) {
	return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}
