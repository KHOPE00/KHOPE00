const KTRWA_BASE_URL = 'https://www.ktrwa.or.kr';
const HOME_URL = `${KTRWA_BASE_URL}/web/user/main.do`;
const BOARD_QUERY_SIZE = 4;
const JOIN_GUIDE_URL = `${KTRWA_BASE_URL}/web/intropage/intropageShow.do?page_id=0209db00b7974fcfa8bc6fe13b8cf4e4&link_g_topmenu_id=ea0bba82bccd4a33b06d1773b9c8ce28&link_g_submenu_id=3b371ae9f3654da587d0a13e2072cd87`;

const ROUTE_MAP = {
    associationMenu: '/web/intropage/intropageShow.do?page_id=b883a2bf891b434d9988d32d45f81080',
    infoMenu: '/web/board/boardContentsListPage.do?board_id=1',
    joinMenu: JOIN_GUIDE_URL,
    englishPage: '/eng/index.do',
    login: '/web/user/login.do',
    noticeBoard: '/web/board/boardContentsListPage.do?board_id=1',
    pressBoard: '/web/board/boardContentsListPage.do?board_id=28',
    feeBoard: '/web/board/boardContentsListPage.do?board_id=5',
    relatedBoard: '/web/board/boardContentsListPage.do?board_id=26',
    searchPage: '/web/intgSch/intgSchListPage.do',
    joinApplication: '/web/userApp/userAppWrite1.do',
    usageFeeHistory: '/web/user/login.do',
    resortCalendar: '/web/user/login.do',
    'b14794176b424cc4be6dc443ed4a0308': '/web/intropage/intropageShow.do?page_id=b883a2bf891b434d9988d32d45f81080',
    '1fb5104529004095a1e3e6936fbf7922': '/web/board/boardContentsListPage.do?board_id=1',
    'ea0bba82bccd4a33b06d1773b9c8ce28': JOIN_GUIDE_URL,
    '84ac6b9727c04a6c8fd85e0ed7fbb9af': '/web/user/login.do',
    '1c6619a6bcd9404eb94f2ce8a3cb7f29': '/web/userApp/userAppWrite1.do',
    '9a29e47bb5614b8d82da02c6faf5e1f3': '/web/intropage/intropageShow.do?page_id=e266756457b342ee994966f032b9b19b',
    '3b371ae9f3654da587d0a13e2072cd87': JOIN_GUIDE_URL,
    'e6d7c2042a8149a286ee3ea7112b73c6': '/web/intropage/intropageShow.do?page_id=e5518d9b14ff41448d5c7ce801b750c5',
    '616db1f3d4b74214b53edd786287e60f': '/web/user/login.do',
    '73bd94c4d95a45fbbd0da960decc5cb8': '/web/intropage/intropageShow.do?page_id=89f5fe3554344ac0ad7dee2f4726a008',
};

const BOARD_LIST_ACTIONS = {
    notice: 'noticeBoard',
    press: 'pressBoard',
    fee: 'feeBoard',
    related: 'relatedBoard',
};

const BOARD_DETAIL_TOPMENU_ID = '1fb5104529004095a1e3e6936fbf7922';

const BOARD_DETAIL_MENU_IDS = {
    1: '23c14b98f7e74786956dba3c693326c5',
    28: 'c107cb868e2f4364bc8bfd68032872bb',
};

function buildBoardDetailUrl(boardId, contentsId) {
    const submenuId = BOARD_DETAIL_MENU_IDS[String(boardId)];
    const query = new URLSearchParams({
        contents_id: String(contentsId),
    });

    if (submenuId) {
        query.set('link_g_topmenu_id', BOARD_DETAIL_TOPMENU_ID);
        query.set('link_g_submenu_id', submenuId);
    }

    return `/web/board/boardContentsView.do?${query.toString()}`;
}

function buildBoardDetailAction(boardId, contentsId) {
    return `javascript:contentsViewMain('${String(boardId)}','${String(contentsId)}')`;
}

const BOARD_DEFINITIONS = {
    notice: {
        boardId: 1,
        label: '공지사항',
        fallbackItems: [
            {
                title: '2026년도 정기총회(서면총회) 결과 보고',
                date: '03.03',
                action: buildBoardDetailAction(1, 'b6e47f53c5ff40fca9a6bf9b367b6e29'),
            },
            {
                title: '영화 시나리오 표준계약서 도입 촉구 캠페인 안내',
                date: '03.03',
                action: buildBoardDetailAction(1, 'ff14e69cc7ee4e08928428bbfe58ecd2'),
            },
            {
                title: '2026년도 정기총회 개최 안내',
                date: '02.09',
                action: buildBoardDetailAction(1, '8822df519b0b4bd4893905606569fe56'),
            },
            {
                title: '2026년도 회비 납부 안내',
                date: '01.20',
                action: buildBoardDetailAction(1, 'a99babe578d9477796b307b9bb33d828'),
            },
        ],
    },
    press: {
        boardId: 28,
        label: '보도자료',
        fallbackItems: [
            {
                title: "[기사] 'AI 데이터' 도입 관련 창작자 권리 보호 이슈",
                date: '01.15',
                action: buildBoardDetailAction(28, 'f8122d8d52be4955b43ed1d1d42202c2'),
            },
            {
                title: '[보도자료] 문화 콘텐츠 창작자들, AI 학습 활용 반대 성명',
                date: '01.13',
                action: buildBoardDetailAction(28, '2a02eee470e64c088b4e4149241a1474'),
            },
            {
                title: '[보도자료] 한국방송작가상 시상식 성료',
                date: '12.19',
                action: buildBoardDetailAction(28, 'b5841fd7352846a08023f53747b65701'),
            },
            {
                title: '[보도자료] 창작자 보상 체계 개선 관련 의견 발표',
                date: '10.23',
                action: buildBoardDetailAction(28, 'bbe6177dc78744358b2a045ca4bbe5ae'),
            },
        ],
    },
    fee: {
        boardId: 5,
        label: '사용료지급안내',
        fallbackItems: [
            {
                title: '스튜디오S 2025년 상반기 복제배포전송료 지급',
                date: '03.04',
                action: buildBoardDetailAction(5, '912c600d3814411581594011c1027320'),
            },
            {
                title: 'MBCC&I 2025년 상반기 국내 복제배포사용료 지급',
                date: '03.04',
                action: buildBoardDetailAction(5, 'a4d3d8a936b942bdae3c7f243de477d7'),
            },
            {
                title: '티캐스트 2024년 재방송료 및 복제배포전송료 지급',
                date: '03.04',
                action: buildBoardDetailAction(5, '749eef261c4b4af4bf75eaaa57b50d26'),
            },
            {
                title: '이채널 2024년 재방송료 및 복제배포전송료 지급',
                date: '03.04',
                action: buildBoardDetailAction(5, 'f1be268f46bd4624b33dbdbf14134f28'),
            },
        ],
    },
    related: {
        boardId: 26,
        label: '유관단체소식',
        fallbackItems: [
            {
                title: '[한국문학예술저작권협회] 2025 미분배보상금 공익목적사업 <창작자 지원사업> 공모 연장 홍보',
                date: '03.12',
                action: buildBoardDetailAction(26, '31394b30d529410aa990cdfcf48bb220'),
            },
            {
                title: '[한국예술인복지재단] 2026년 3월 생활안정자금(융자) 사업 안내',
                date: '02.27',
                action: buildBoardDetailAction(26, '6475d2d34bfd46c49e61b3df78652772'),
            },
            {
                title: '[한국예술인복지재단] 2026년 3월 생활안정자금(융자) 사업 안내',
                date: '02.27',
                action: buildBoardDetailAction(26, '1d8265a51fbf4ac2a672fcba349a9043'),
            },
            {
                title: '[김수현드라마아트홀] 2026 <구성작가 과정 1기> 수강생 모집 안내',
                date: '02.11',
                action: buildBoardDetailAction(26, '63d63e95a7394184a27943a7611326c6'),
            },
        ],
    },
};

const BOARD_FALLBACK_SNAPSHOT = {
    notice: [
        {
            title: '2026년도 정기총회(서면총회) 결과 보고 등',
            date: '03.03',
            action: buildBoardDetailAction(1, 'b6e47f53c5ff40fca9a6bf9b367b6e29'),
        },
        {
            title: '영화 시나리오 저작권 대리·중개 업무 개시 및 업무협약 체결 안내',
            date: '03.03',
            action: buildBoardDetailAction(1, 'ff14e69cc7ee4e08928428bbfe58ecd2'),
        },
        {
            title: '2026년도 정기총회 개최 안내',
            date: '02.09',
            action: buildBoardDetailAction(1, '8822df519b0b4bd4893905606569fe56'),
        },
        {
            title: '2026년도 회비 납부 안내',
            date: '01.20',
            action: buildBoardDetailAction(1, 'a99babe578d9477796b307b9bb33d828'),
        },
    ],
    press: [
        {
            title: '[기사] \'AI 데이터\' 저작권 훼손 우려에…국가AI전략위 "전향적 접근해야"',
            date: '01.15',
            action: buildBoardDetailAction(28, 'f8122d8d52be4955b43ed1d1d42202c2'),
        },
        {
            title: "[보도자료] 문화 콘텐츠 창작자들, “정부의 'AI 행동계획'은  저작권 무력화 시도” 강력 반발",
            date: '01.13',
            action: buildBoardDetailAction(28, '2a02eee470e64c088b4e4149241a1474'),
        },
        {
            title: '[보도자료] 제38회 한국방송작가상 시상식 성료',
            date: '12.19',
            action: buildBoardDetailAction(28, 'b5841fd7352846a08023f53747b65701'),
        },
        {
            title: `[보도자료] “창작자 연대, 최휘영 문체부 장관 면담 '정당한 보상' 논의”`,
            date: '10.23',
            action: buildBoardDetailAction(28, 'bbe6177dc78744358b2a045ca4bbe5ae'),
        },
    ],
    fee: [
        {
            title: '스튜디오S 2025년 상반기 복제배포전송료 지급',
            date: '03.04',
            action: buildBoardDetailAction(5, '912c600d3814411581594011c1027320'),
        },
        {
            title: 'MBCC&I 2025년 상반기 국내 복제배포사용료 지급',
            date: '03.04',
            action: buildBoardDetailAction(5, 'a4d3d8a936b942bdae3c7f243de477d7'),
        },
        {
            title: '티캐스트 2024년 재방송료 및 복제배포전송료 지급',
            date: '03.04',
            action: buildBoardDetailAction(5, '749eef261c4b4af4bf75eaaa57b50d26'),
        },
        {
            title: '이채널 2024년 재방송료 및 복제배포전송료 지급',
            date: '03.04',
            action: buildBoardDetailAction(5, 'f1be268f46bd4624b33dbdbf14134f28'),
        },
    ],
    related: [
        {
            title: '[한국문학예술저작권협회] 2025 미분배보상금 공익목적사업 <창작자 지원사업> 공모 연장 홍보',
            date: '03.12',
            action: buildBoardDetailAction(26, '31394b30d529410aa990cdfcf48bb220'),
        },
        {
            title: '[한국예술인복지재단] 2026년 3월 생활안정자금(융자) 사업 안내',
            date: '02.27',
            action: buildBoardDetailAction(26, '6475d2d34bfd46c49e61b3df78652772'),
        },
        {
            title: '[한국예술인복지재단] 2026년 3월 생활안정자금(융자) 사업 안내',
            date: '02.27',
            action: buildBoardDetailAction(26, '1d8265a51fbf4ac2a672fcba349a9043'),
        },
        {
            title: '[김수현드라마아트홀] 2026 <구성작가 과정 1기> 수강생 모집 안내',
            date: '02.11',
            action: buildBoardDetailAction(26, '63d63e95a7394184a27943a7611326c6'),
        },
    ],
};

const CALENDAR_POPUP_FALLBACK = {
    title: '메인 캘린더 팝업',
    description: '최근 확인된 원본 이미지를 먼저 표시합니다.',
    date: '최근 확인 2026.03.04',
    countText: '실시간 연결 복구 시 자동 반영',
    action: 'https://www.ktrwa.or.kr/contents/popup/popup20260304.png',
    linkLabel: '원본 이미지 열기',
    imageUrl: 'https://www.ktrwa.or.kr/contents/popup/popup20260304.png',
    alt: '협회 메인 캘린더 팝업',
    width: 550,
    height: 721,
    linkType: 'image',
};

const boardStore = Object.fromEntries(
    Object.entries(BOARD_DEFINITIONS).map(([key, definition]) => [key, {
        items: BOARD_FALLBACK_SNAPSHOT[key] || definition.fallbackItems,
        source: 'fallback',
        syncedAt: '',
        error: '',
    }]),
);

const calendarPopupStore = {
    item: { ...CALENDAR_POPUP_FALLBACK },
    source: 'loading',
    syncedAt: '',
    error: '',
};

function toAbsoluteUrl(value) {
    if (!value) {
        return HOME_URL;
    }

    if (value.startsWith('http')) {
        return value;
    }

    return `${KTRWA_BASE_URL}${value}`;
}

function formatBoardDate(regDate) {
    const normalized = String(regDate || '').trim();
    const matched = normalized.match(/^(\d{4})[-.]?(\d{2})[-.]?(\d{2})$/);

    if (!matched) {
        return normalized;
    }

    return `${matched[2]}.${matched[3]}`;
}

function formatFullDate(rawValue) {
    const normalized = String(rawValue || '').trim();
    const compact = normalized.replaceAll(/[^\d]/g, '');

    if (compact.length < 8) {
        return normalized;
    }

    return `${compact.slice(0, 4)}.${compact.slice(4, 6)}.${compact.slice(6, 8)}`;
}

function escapeHtml(text) {
    return String(text || '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function isOfficialKtrwaHost() {
    return /(^|\.)ktrwa\.or\.kr$/i.test(window.location.hostname);
}

function isLocalVerificationHost() {
    return window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
}

function resolveScriptAction(scriptAction) {
    const normalized = String(scriptAction || '').trim().replace(/;+\s*$/, '');

    if (!normalized) {
        return '';
    }

    const contentsMatch = normalized.match(/contentsViewMain\('([^']+)','([^']+)'\)/i);
    if (contentsMatch) {
        return buildBoardDetailUrl(contentsMatch[1], contentsMatch[2]);
    }

    const webzineMatch = normalized.match(/webZineDetail\('([^']+)'\)/i);
    if (webzineMatch) {
        return `/web/webzine/webzineMstDetail.do?mst_idx=${encodeURIComponent(webzineMatch[1])}`;
    }

    const goPageMatch = normalized.match(/goPage\('([^']+)'/i);
    if (goPageMatch) {
        return goPageMatch[1];
    }

    if (/alert\(/i.test(normalized)) {
        return '';
    }

    const relativeMatch = normalized.match(/'(\/[^']+)'/);
    if (relativeMatch) {
        return relativeMatch[1];
    }

    return '';
}

function resolveKtrwaAction(action) {
    if (!action) {
        return { type: 'disabled', url: '' };
    }

    if (action.startsWith('javascript:')) {
        const resolvedScriptAction = resolveScriptAction(action);
        return resolveKtrwaAction(resolvedScriptAction);
    }

    if (ROUTE_MAP[action]) {
        return { type: 'url', url: toAbsoluteUrl(ROUTE_MAP[action]) };
    }

    if (action.startsWith('/')) {
        return { type: 'url', url: toAbsoluteUrl(action) };
    }

    if (action.startsWith('http')) {
        return { type: 'url', url: action };
    }

    return { type: 'url', url: HOME_URL };
}

function applyResolvedLink(link, action) {
    if (!(link instanceof HTMLAnchorElement)) {
        return;
    }

    const resolved = resolveKtrwaAction(action);

    if (resolved.type !== 'url' || !resolved.url) {
        link.dataset.action = '';
        link.removeAttribute('href');
        link.removeAttribute('target');
        link.removeAttribute('rel');
        link.setAttribute('aria-disabled', 'true');
        link.classList.add('is-static');
        return;
    }

    link.dataset.action = action;
    link.href = resolved.url;
    if (!link.getAttribute('target')) {
        link.target = '_blank';
    }
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
    link.classList.remove('is-static');
}

async function fetchJson(url, init = {}) {
    const headers = new Headers(init.headers || {});
    if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
    }

    const response = await fetch(url, {
        method: init.method || 'GET',
        headers,
        body: init.body,
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}

async function fetchText(url, init = {}) {
    const headers = new Headers(init.headers || {});
    if (!headers.has('Accept')) {
        headers.set('Accept', 'text/html, text/plain;q=0.9, */*;q=0.8');
    }

    const response = await fetch(url, {
        method: init.method || 'GET',
        headers,
        body: init.body,
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.text();
}

function getBoardFeedUrls(boardId) {
    const query = new URLSearchParams({
        board_id: String(boardId),
        size: String(BOARD_QUERY_SIZE),
        homepage: 'null',
    }).toString();
    const urls = [];

    if (isOfficialKtrwaHost()) {
        urls.push(`/web/board/loadMainBoard.do?${query}`);
    }

    if (isLocalVerificationHost()) {
        urls.push(`${window.location.origin}/__ktrwa/board?${query}`);
    }

    urls.push(`${KTRWA_BASE_URL}/web/board/loadMainBoard.do?${query}`);

    return [...new Set(urls)];
}

function getCalendarPopupCandidates() {
    const urls = [];

    if (isOfficialKtrwaHost()) {
        urls.push('/web/user/main.do');
    }

    if (isLocalVerificationHost()) {
        urls.push(`${window.location.origin}/__ktrwa/main-html`);
    }

    urls.push(`${KTRWA_BASE_URL}/web/user/main.do`);

    return [...new Set(urls)].map((url) => ({ url, init: { method: 'GET' } }));
}

function normalizeBoardItems(items, boardId) {
    return (items || []).slice(0, BOARD_QUERY_SIZE).map((item) => ({
        title: item.title || '',
        date: formatBoardDate(item.reg_date),
        action: buildBoardDetailAction(item.board_id || boardId, item.contents_id),
    }));
}

function extractBoardDetailContext(action) {
    const normalized = String(action || '')
        .trim()
        .replace(/^javascript:/i, '')
        .replace(/;+\s*$/, '');
    const match = normalized.match(/^contentsViewMain\('([^']+)','([^']+)'\)$/i);

    if (!match) {
        return null;
    }

    return {
        boardId: String(match[1]),
        contentsId: String(match[2]),
    };
}

function submitOfficialSessionForm(menuId, targetName) {
    if (!menuId || !targetName || !document.body) {
        return false;
    }

    const form = document.createElement('form');
    const menuInput = document.createElement('input');

    form.method = 'POST';
    form.action = `${KTRWA_BASE_URL}/web/user/sessionPage.do`;
    form.target = targetName;
    form.hidden = true;

    menuInput.type = 'hidden';
    menuInput.name = 'menu_id';
    menuInput.value = menuId;

    form.append(menuInput);
    document.body.append(form);
    form.submit();
    form.remove();

    return true;
}

function openOfficialBoardDetail(boardId, contentsId, targetName = '_blank') {
    const menuId = BOARD_DETAIL_MENU_IDS[String(boardId)];
    const finalUrl = toAbsoluteUrl(buildBoardDetailUrl(boardId, contentsId));

    if (window.__probe) {
        window.open(finalUrl, targetName || '_blank');
        return true;
    }

    if (!menuId) {
        return false;
    }

    if (targetName === '_self') {
        submitOfficialSessionForm(menuId, '_self');
        window.setTimeout(() => {
            window.location.href = finalUrl;
        }, 180);
        return true;
    }

    const popupName = targetName && !targetName.startsWith('_')
        ? targetName
        : `ktrwa-board-${Date.now()}`;
    const popup = window.open('about:blank', popupName);

    if (!popup) {
        return false;
    }

    try {
        popup.document.write('<!doctype html><title>Loading</title><body style="font-family:sans-serif;padding:24px;">페이지 이동 중...</body>');
        popup.document.close();
    } catch (error) {
    }

    submitOfficialSessionForm(menuId, popupName);
    window.setTimeout(() => {
        try {
            popup.location = finalUrl;
        } catch (error) {
            window.open(finalUrl, popupName);
        }
    }, 220);

    return true;
}

function extractCalendarPopup(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const popupRoot = [...doc.querySelectorAll('div[id^="divpop"]')].find((node) => node.querySelector('img[src*="/contents/popup/"]'));

    if (!popupRoot) {
        throw new Error('Calendar popup markup not found.');
    }

    const imageNode = popupRoot.querySelector('img[src*="/contents/popup/"]');
    const tableNode = popupRoot.querySelector('table');

    if (!imageNode) {
        throw new Error('Calendar popup image not found.');
    }

    const imageUrl = toAbsoluteUrl(imageNode.getAttribute('src') || '');
    const rawLinkNode = imageNode.closest('a')
        || popupRoot.querySelector('a[onclick*="contentsViewMain"]')
        || popupRoot.querySelector('a[href]:not([href^="javascript:close"])');
    const rawOnclick = String(rawLinkNode?.getAttribute('onclick') || '').trim().replace(/;+\s*$/, '');
    const rawHref = String(rawLinkNode?.getAttribute('href') || '').trim();
    let action = imageUrl;
    let linkLabel = '원본 이미지 열기';
    let linkType = 'image';

    if (rawOnclick && !rawOnclick.includes('closeWin')) {
        action = rawOnclick.startsWith('javascript:') ? rawOnclick : `javascript:${rawOnclick}`;
        linkLabel = '상세 페이지 열기';
        linkType = 'detail';
    } else if (rawHref && rawHref !== '#' && rawHref !== '#none') {
        action = rawHref;
        linkLabel = rawHref.includes('/contents/popup/') ? '원본 이미지 열기' : '상세 페이지 열기';
        linkType = rawHref.includes('/contents/popup/') ? 'image' : 'detail';
    }

    const width = Number.parseInt(tableNode?.getAttribute('width') || imageNode.getAttribute('width') || '460', 10);
    const height = Number.parseInt(tableNode?.getAttribute('height') || imageNode.getAttribute('height') || '480', 10);
    const fileDateMatch = imageUrl.match(/popup(\d{8})/i);
    const popupDate = fileDateMatch ? formatFullDate(fileDateMatch[1]) : '';

    return {
        title: '협회 메인 캘린더 팝업',
        description: linkType === 'detail'
            ? '현재 운영 팝업에 연결된 상세 페이지까지 함께 따라갑니다.'
            : '현재 운영 중인 달력 팝업 이미지를 그대로 반영합니다.',
        date: popupDate ? `업데이트 ${popupDate}` : '공식 메인 기준',
        countText: linkType === 'detail'
            ? '현재 팝업은 상세 링크가 함께 제공됩니다.'
            : '현재 팝업은 이미지 안내형입니다.',
        action,
        linkLabel,
        imageUrl,
        alt: imageNode.getAttribute('alt')?.trim() || '협회 메인 캘린더 팝업',
        width: Number.isFinite(width) && width > 0 ? width : 460,
        height: Number.isFinite(height) && height > 0 ? height : 480,
        linkType,
    };
}

async function syncBoard(boardKey) {
    const definition = BOARD_DEFINITIONS[boardKey];
    let lastError = null;

    for (const url of getBoardFeedUrls(definition.boardId)) {
        try {
            const data = await fetchJson(url);
            const liveItems = normalizeBoardItems(data.list, definition.boardId);

            if (!liveItems.length) {
                continue;
            }

            boardStore[boardKey] = {
                items: liveItems,
                source: 'live',
                syncedAt: String(data.reg_date || ''),
                error: '',
            };
            return;
        } catch (error) {
            lastError = error;
        }
    }

    boardStore[boardKey] = {
        ...boardStore[boardKey],
        source: 'fallback',
        syncedAt: '',
        error: lastError ? String(lastError.message || lastError) : 'Unknown error',
    };
    console.error(`Failed to sync ${boardKey} board.`, lastError);
}

async function syncCalendarPopup() {
    let lastError = null;

    for (const candidate of getCalendarPopupCandidates()) {
        try {
            const htmlText = await fetchText(candidate.url, candidate.init);
            const popupItem = extractCalendarPopup(htmlText);

            calendarPopupStore.item = popupItem;
            calendarPopupStore.source = 'live';
            calendarPopupStore.syncedAt = popupItem.date;
            calendarPopupStore.error = '';
            return;
        } catch (error) {
            lastError = error;
        }
    }

    calendarPopupStore.item = {
        ...CALENDAR_POPUP_FALLBACK,
        description: '실시간 연결이 늦어져 최근 확인 이미지를 표시합니다.',
        countText: '실시간 연결 복구 시 자동 갱신',
    };
    calendarPopupStore.source = 'fallback';
    calendarPopupStore.syncedAt = '';
    calendarPopupStore.error = lastError ? String(lastError.message || lastError) : 'Unknown error';
    console.error('Failed to sync calendar popup.', lastError);
}

function bindActionLinks(root) {
    if (!root) {
        return;
    }

    if (root instanceof HTMLAnchorElement && root.dataset.action !== undefined) {
        applyResolvedLink(root, root.dataset.action || '');
    }

    root.querySelectorAll?.('a[data-action]').forEach((link) => {
        applyResolvedLink(link, link.dataset.action || '');
    });
}

function bindBoardDetailLinks(boardList) {
    if (!boardList) {
        return;
    }
}

function updateBoardSyncStatus(boardKey, statusNode) {
    if (!statusNode) {
        return;
    }

    const currentBoard = boardStore[boardKey];
    statusNode.dataset.source = currentBoard.source;

    if (currentBoard.source === 'live') {
        statusNode.textContent = `${BOARD_DEFINITIONS[boardKey].label} 실시간 동기화`;
        return;
    }

    if (currentBoard.error) {
        statusNode.textContent = `${BOARD_DEFINITIONS[boardKey].label} 백업 데이터 표시`;
        return;
    }

    statusNode.textContent = `${BOARD_DEFINITIONS[boardKey].label} 동기화 준비 중`;
}

function renderBoard(boardKey, boardList, tabs, moreButton, statusNode) {
    const currentBoard = boardStore[boardKey] || boardStore.notice;
    boardList.innerHTML = currentBoard.items.map((item) => {
        const resolved = resolveKtrwaAction(item.action);
        const href = resolved.type === 'url' ? resolved.url : HOME_URL;

        return `
            <li>
                <a href="${href}" target="_self" rel="noopener noreferrer" data-action="${escapeHtml(item.action)}">
                    <span class="title">${escapeHtml(item.title)}</span>
                    <span class="date">${escapeHtml(item.date)}</span>
                </a>
            </li>
        `;
    }).join('');

    tabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.boardKey === boardKey);
    });

    moreButton.dataset.action = BOARD_LIST_ACTIONS[boardKey];
    boardList.dataset.activeBoardKey = boardKey;
    boardList.dataset.syncSource = currentBoard.source;
    bindActionLinks(moreButton);
    bindActionLinks(boardList);
    bindBoardDetailLinks(boardList);
    updateBoardSyncStatus(boardKey, statusNode);
}

function renderCalendarPopup(card) {
    if (!card) {
        return;
    }

    const item = calendarPopupStore.item;
    const statusNode = card.querySelector('.promo-status');
    const titleNode = card.querySelector('.promo-title');
    const descNode = card.querySelector('.promo-desc');
    const dateNode = card.querySelector('.promo-date');
    const countNode = card.querySelector('.promo-count');
    const linkNode = card.querySelector('.promo-link');
    const linkTextNode = card.querySelector('.promo-link-text');
    const visualLinkNode = card.querySelector('.promo-visual-link');
    const imageNode = card.querySelector('.promo-image');
    const placeholderNode = card.querySelector('.promo-placeholder');
    const resolved = item.action ? resolveKtrwaAction(item.action) : { type: 'disabled', url: '' };
    const href = resolved.type === 'url' ? resolved.url : '';

    card.dataset.popupSource = calendarPopupStore.source;
    card.dataset.popupLink = item.linkType || 'none';
    card.style.setProperty('--promo-aspect', `${item.width} / ${item.height}`);
    titleNode.textContent = item.title;
    descNode.textContent = item.description;
    dateNode.textContent = item.date;
    countNode.textContent = item.countText;
    linkTextNode.textContent = item.linkLabel;

    if (calendarPopupStore.source === 'live') {
        statusNode.textContent = '공식 메인 실시간 반영';
    } else if (calendarPopupStore.error) {
        statusNode.textContent = '공식 메인 연결 지연';
    } else {
        statusNode.textContent = '공식 메인 확인 중';
    }

    statusNode.dataset.source = calendarPopupStore.source;

    if (href) {
        [linkNode, visualLinkNode].forEach((node) => {
            node.dataset.action = item.action;
            applyResolvedLink(node, item.action);
        });
        linkNode.hidden = false;
    } else {
        [linkNode, visualLinkNode].forEach((node) => {
            applyResolvedLink(node, '');
        });
        linkNode.hidden = true;
    }

    if (item.imageUrl) {
        imageNode.src = item.imageUrl;
        imageNode.alt = item.alt;
        imageNode.hidden = false;
        placeholderNode.hidden = true;
        card.classList.add('has-live-image');
    } else {
        imageNode.removeAttribute('src');
        imageNode.alt = item.alt;
        imageNode.hidden = true;
        placeholderNode.hidden = false;
        placeholderNode.textContent = calendarPopupStore.error
            ? '공식 캘린더 팝업을 아직 불러오지 못했습니다.'
            : '캘린더 팝업을 불러오는 중입니다.';
        card.classList.remove('has-live-image');
    }

    bindActionLinks(card);
}

async function hydrateBoards(boardList, tabs, moreButton, statusNode) {
    await Promise.allSettled(Object.keys(BOARD_DEFINITIONS).map(syncBoard));
    renderBoard(boardList.dataset.activeBoardKey || 'notice', boardList, tabs, moreButton, statusNode);
}

async function hydrateCalendarPopup(card) {
    renderCalendarPopup(card);
    await syncCalendarPopup();
    renderCalendarPopup(card);
}

document.addEventListener('DOMContentLoaded', () => {
    const gnb = document.querySelector('.gnb');
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const boardList = document.querySelector('.board-list');
    const tabs = [...document.querySelectorAll('.tab')];
    const moreButton = document.querySelector('.more-btn');
    const boardSyncStatus = document.querySelector('.board-sync-status');
    const promoCard = document.querySelector('.promo-card');

    bindActionLinks(document);

    if (boardList && tabs.length && moreButton) {
        renderBoard('notice', boardList, tabs, moreButton, boardSyncStatus);
        hydrateBoards(boardList, tabs, moreButton, boardSyncStatus);

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                renderBoard(tab.dataset.boardKey || 'notice', boardList, tabs, moreButton, boardSyncStatus);
            });
        });
    }

    if (promoCard) {
        hydrateCalendarPopup(promoCard);
    }

    mobileMenuButton?.addEventListener('click', () => {
        const opened = gnb.classList.toggle('menu-open');
        mobileMenuButton.setAttribute('aria-expanded', String(opened));
        mobileMenuButton.setAttribute('aria-label', opened ? '메뉴 닫기' : '메뉴 열기');
    });

    document.querySelectorAll('.main-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            gnb.classList.remove('menu-open');
            mobileMenuButton?.setAttribute('aria-expanded', 'false');
            mobileMenuButton?.setAttribute('aria-label', '메뉴 열기');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            gnb.classList.remove('menu-open');
            mobileMenuButton?.setAttribute('aria-expanded', 'false');
            mobileMenuButton?.setAttribute('aria-label', '메뉴 열기');
        }
    });
});
