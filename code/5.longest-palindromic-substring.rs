// rustにしてゴリ押し〜〜〜
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        fn is_palindrome(sub: &[char]) -> bool {
            let len = sub.len();
            for i in 0..len / 2 {
                if sub[i] != sub[len - i - 1] {
                    return false;
                }
            }
            true
        }

        let chars: Vec<char> = s.chars().collect();
        let mut longest = String::new();

        for i in 0..chars.len() {
            for j in i + 1..=chars.len() {
                let sub = &chars[i..j];
                if sub.len() > longest.len() && is_palindrome(sub) {
                    longest = sub.iter().collect();
                }
            }
        }

        longest
    }
}
